"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useMediaCapabilities } from "@/hooks/useMediaCapabilities";

interface HeroCanvasProps {
  onHoverStateChange?: (hovered: boolean) => void;
}

export default function HeroCanvas({ onHoverStateChange }: HeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { prefersReducedMotion } = useMediaCapabilities();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: window.innerWidth >= 768,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const isMobile = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const updateSize = () => {
      const w = container.clientWidth || 600;
      const h = container.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    updateSize();

    // Studio Lighting for Specular Obsidian & Deep Crimson Light Reflections
    const ambientLight = new THREE.AmbientLight(0x1a1516, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf5f2ed, 3.8);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const crimsonRimLight = new THREE.DirectionalLight(0x8b0d1a, 4.5);
    crimsonRimLight.position.set(-5, -3, -2);
    scene.add(crimsonRimLight);

    const coreCrimsonPoint = new THREE.PointLight(0xa31222, 3.2, 12);
    coreCrimsonPoint.position.set(0, 0, 1.5);
    scene.add(coreCrimsonPoint);

    // Group for the 3D Abstract Sculpture
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Central Faceted Obsidian Monolith (Icosahedron)
    const monolithGeo = new THREE.IcosahedronGeometry(1.65, 0);
    const obsidianMat = new THREE.MeshPhysicalMaterial({
      color: 0x0b0b0b,
      roughness: 0.15,
      metalness: 0.88,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95,
    });
    const monolithMesh = new THREE.Mesh(monolithGeo, obsidianMat);
    sculptureGroup.add(monolithMesh);

    // Wireframe Cage for the Monolith
    const wireGeo = new THREE.WireframeGeometry(monolithGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x8b0d1a,
      transparent: true,
      opacity: 0.65,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    monolithMesh.add(wireMesh);

    // 2. Refractive Crimson Glass Inner Core (Octahedron)
    const coreGeo = new THREE.OctahedronGeometry(0.9, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x8b0d1a,
      emissive: 0x670913,
      emissiveIntensity: 0.35,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.52,
      thickness: 1.2,
      transparent: true,
      opacity: 0.92,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // 3. Floating Kinetic Orbital Rings (Kinetic Technology Ring)
    const ringGeo = new THREE.TorusGeometry(2.35, 0.022, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xf5f2ed,
      roughness: 0.3,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3.2;
    ring1.rotation.y = Math.PI / 6;
    sculptureGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.55, 0.016, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x8b0d1a,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    sculptureGroup.add(ring2);

    // 4. Satellite Floating Crystal Facets
    const satellites: THREE.Mesh[] = [];
    const satCount = 6;
    for (let i = 0; i < satCount; i++) {
      const satGeo = new THREE.TetrahedronGeometry(0.18 + (i % 3) * 0.06, 0);
      const satMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x8b0d1a : 0x252525,
        roughness: 0.25,
        metalness: 0.85,
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 2.45 + (i % 2) * 0.35;
      satMesh.position.set(
        Math.cos(angle) * radius,
        (Math.sin(angle * 1.5) * 0.8),
        Math.sin(angle) * radius
      );
      sculptureGroup.add(satMesh);
      satellites.push(satMesh);
    }

    // Pointer Interaction and Smooth Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / Math.max(1, rect.width) - 0.5;
      const ny = (e.clientY - rect.top) / Math.max(1, rect.height) - 0.5;
      mouse.targetX = nx * 1.8;
      mouse.targetY = ny * 1.8;
    };

    const onPointerEnter = () => {
      onHoverStateChange?.(true);
    };

    const onPointerLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      onHoverStateChange?.(false);
    };

    window.addEventListener("resize", updateSize);
    container.addEventListener("pointermove", onPointerMove, { passive: true });
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    let animId = 0;
    const startTime = performance.now();

    const animate = () => {
      animId = window.requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Damped pointer follow
      mouse.x += (mouse.targetX - mouse.x) * 0.055;
      mouse.y += (mouse.targetY - mouse.y) * 0.055;

      // Group rotation
      sculptureGroup.rotation.y = elapsedTime * 0.22 + mouse.x * 0.85;
      sculptureGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.12 - mouse.y * 0.85;
      sculptureGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.1;

      // Inner Core counter-rotation
      coreMesh.rotation.y = -elapsedTime * 0.45;
      coreMesh.rotation.z = Math.cos(elapsedTime * 0.35) * 0.2;

      // Orbital Rings rotation
      ring1.rotation.z = elapsedTime * 0.28;
      ring2.rotation.y = -elapsedTime * 0.22;

      // Satellites orbiting
      satellites.forEach((sat, i) => {
        const offset = i * (Math.PI / 3);
        const satAngle = elapsedTime * 0.38 + offset;
        const r = 2.45 + Math.sin(elapsedTime * 0.5 + i) * 0.2;
        sat.position.x = Math.cos(satAngle) * r;
        sat.position.z = Math.sin(satAngle) * r;
        sat.rotation.x += 0.02;
        sat.rotation.y += 0.03;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateSize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);

      monolithGeo.dispose();
      obsidianMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      satellites.forEach((s) => {
        s.geometry.dispose();
        if (Array.isArray(s.material)) s.material.forEach((m) => m.dispose());
        else s.material.dispose();
      });
      renderer.dispose();
    };
  }, [prefersReducedMotion, onHoverStateChange]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      <canvas ref={canvasRef} className="h-full w-full block" />
    </div>
  );
}
