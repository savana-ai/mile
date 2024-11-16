import React, { useEffect, useRef } from 'react';
import BpmnJS from 'bpmn-js';
import { BPMN_DIAGRAM } from '../../data/bpmn';

export const ProcessModelViewer = () => {
    const containerRef = useRef(null);
  
    
    useEffect(() => {
      if (!containerRef.current) return;
  
      // Initialize BPMN Viewer
      const viewer = new BpmnJS({
        container: containerRef.current,
        height: '100%',
        width: '100%'
      });
  
      // Load BPMN diagram
      viewer.importXML(BPMN_DIAGRAM)
        .then(() => {
          const canvas = viewer.get('canvas');
          canvas.zoom('fit-viewport', 'auto');
        })
        .catch(err => {
          console.error('Error loading BPMN diagram', err);
        });
  
      // Cleanup
      return () => {
        viewer.destroy();
      };
    }, []);
  
    return (
      <div 
        ref={containerRef}
        style={{ 
          width: '100%', 
          height: '800px'
        }} 
      />
    );
  };