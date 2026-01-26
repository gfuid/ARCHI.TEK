
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GenerativeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create a Blueprint Grid
    const gridSize = 40;
    const gridDivisions = 40;
    const grid = new THREE.Group();
    scene.add(grid);

    const pointsGeometry = new THREE.BufferGeometry();
    const pointsCount = Math.pow(gridDivisions + 1, 2);
    const positions = new Float32Array(pointsCount * 3);
    const originalPositions = new Float32Array(pointsCount * 3);

    let k = 0;
    for (let i = 0; i <= gridDivisions; i++) {
      for (let j = 0; j <= gridDivisions; j++) {
        const x = (i - gridDivisions / 2) * (gridSize / gridDivisions);
        const z = (j - gridDivisions / 2) * (gridSize / gridDivisions);
        const y = 0;
        
        positions[k * 3] = x;
        positions[k * 3 + 1] = y;
        positions[k * 3 + 2] = z;

        originalPositions[k * 3] = x;
        originalPositions[k * 3 + 1] = y;
        originalPositions[k * 3 + 2] = z;
        k++;
      }
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xc5a059,
      size: 0.05,
      transparent: true,
      opacity: 0.4
    });

    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    grid.add(pointsMesh);

    // Add coordinate lines (Blueprints)
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xc5a059, transparent: true, opacity: 0.1 });
    for (let i = 0; i <= gridDivisions; i += 4) {
      const lineGeomH = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-gridSize/2, 0, (i - gridDivisions/2) * (gridSize/gridDivisions)),
        new THREE.Vector3(gridSize/2, 0, (i - gridDivisions/2) * (gridSize/gridDivisions))
      ]);
      const lineGeomV = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3((i - gridDivisions/2) * (gridSize/gridDivisions), 0, -gridSize/2),
        new THREE.Vector3((i - gridDivisions/2) * (gridSize/gridDivisions), 0, gridSize/2)
      ]);
      grid.add(new THREE.Line(lineGeomH, lineMaterial));
      grid.add(new THREE.Line(lineGeomV, lineMaterial));
    }

    // --- Subtle Particle System ---
    const particlesCount = 300;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);
    const particleVelocities = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      // Random spread within a large volume
      particlePositions[i * 3] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20 + 5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Small random drift
      particleVelocities[i * 3] = (Math.random() - 0.5) * 0.01;
      particleVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    });

    const floatingParticles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(floatingParticles);
    // --- End Particle System ---

    camera.position.set(0, 8, 15);
    camera.lookAt(0, 0, 0);

    let mouseX = 0;
    let mouseY = 0;
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate grid slowly
      grid.rotation.y += 0.0005;
      
      // Update grid points based on mouse ripple
      const gridPositionsAttr = pointsGeometry.attributes.position;
      for (let i = 0; i < pointsCount; i++) {
        const x = originalPositions[i * 3];
        const z = originalPositions[i * 3 + 2];
        
        const dx = x - mouse.x * 10;
        const dz = z + mouse.y * 10;
        const dist = Math.sqrt(dx * dx + dz * dz);
        
        const ripple = Math.sin(dist * 0.5 - Date.now() * 0.002) * 0.5;
        const influence = Math.max(0, 1 - dist / 5);
        
        gridPositionsAttr.setY(i, ripple * influence);
      }
      gridPositionsAttr.needsUpdate = true;

      // Update floating particles
      const particlePositionsAttr = particlesGeometry.attributes.position;
      for (let i = 0; i < particlesCount; i++) {
        let px = particlePositionsAttr.getX(i);
        let py = particlePositionsAttr.getY(i);
        let pz = particlePositionsAttr.getZ(i);

        // Basic drift
        px += particleVelocities[i * 3];
        py += particleVelocities[i * 3 + 1];
        pz += particleVelocities[i * 3 + 2];

        // Mouse reaction (subtle attraction)
        const targetX = mouse.x * 15;
        const targetY = -mouse.y * 10 + 5;
        const targetZ = mouseX * 10;

        px += (targetX - px) * 0.0005;
        py += (targetY - py) * 0.0005;

        // Boundaries reset
        if (Math.abs(px) > 25) px = (Math.random() - 0.5) * 50;
        if (Math.abs(py) > 15) py = (Math.random() - 0.5) * 20 + 5;
        if (Math.abs(pz) > 25) pz = (Math.random() - 0.5) * 50;

        particlePositionsAttr.setXYZ(i, px, py, pz);
      }
      particlePositionsAttr.needsUpdate = true;

      // Camera parallax
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 5 + 8 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
};

export default GenerativeCanvas;
