"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Configuração básica
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // Criar uma grade de pontos flutuantes
    const geometry = new THREE.BufferGeometry();
    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      // Posições
      positions[i] = (Math.random() - 0.5) * 50;     // x
      positions[i + 1] = (Math.random() - 0.5) * 50; // y
      positions[i + 2] = (Math.random() - 0.5) * 50; // z
      
      // Cores
      colors[i] = 0.23;     // R
      colors[i + 1] = 0.51; // G
      colors[i + 2] = 0.96; // B (cor primária - ajuste conforme seu tema)
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Material com gradiente
    const material = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    
    // Criar os pontos
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    
    // Adicionar luzes
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x3b82f6, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Posicionar câmera
    camera.position.z = 20;
    
    // Variáveis para animação
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    // Event listeners
    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    
    const onScroll = () => {
      points.rotation.y = scrollY.get() * 0.001;
      points.rotation.x = scrollY.get() * 0.001;
    };
    
    window.addEventListener('mousemove', onMouseMove);
    scrollY.onChange(onScroll);
    
    // Animação
    const animate = () => {
      requestAnimationFrame(animate);
      
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;
      
      points.rotation.y += 0.01 * (targetX - points.rotation.y);
      points.rotation.x += 0.01 * (targetY - points.rotation.x);
      
      // Movimento ondulante
      const positions = geometry.attributes.position.array as Float32Array;
      const time = Date.now() * 0.0001;
      
      for (let i = 0; i < count * 3; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        
        // Adicionar movimento ondulante
        positions[i + 1] = y + Math.sin(time + x) * 0.1;
        positions[i + 2] = z + Math.cos(time + x) * 0.1;
      }
      
      geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };
    
    // Responsividade
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Iniciar animação
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      scrollY.clearListeners();
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [scrollY]);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10"
      style={{ 
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3))'
      }}
    />
  );
} 