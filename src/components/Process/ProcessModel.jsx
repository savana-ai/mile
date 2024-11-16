// ProcessModelService.js
import BpmnJS from 'bpmn-js';

export class ProcessModelService {
  constructor() {
    this.viewer = null;
  }

  async initializeViewer(container, options = {}) {
    if (!container) throw new Error('Container element is required');

    const defaultOptions = {
      height: '100%',
      width: '100%',
      ...options
    };

    try {
      this.viewer = new BpmnJS({
        container,
        ...defaultOptions
      });
    } catch (error) {
      console.error('Error initializing BPMN viewer:', error);
      throw error;
    }
  }

  async loadDiagram(bpmnXML) {
    if (!this.viewer) throw new Error('Viewer not initialized');

    try {
      const result = await this.viewer.importXML(bpmnXML);
      
      if (result.warnings.length) {
        console.warn('Warnings loading BPMN diagram:', result.warnings);
      }
      
      const canvas = this.viewer.get('canvas');
      canvas.zoom('fit-viewport', 'auto');
      
      return result;
    } catch (error) {
      console.error('Error loading BPMN diagram:', error);
      throw error;
    }
  }

  destroy() {
    if (this.viewer) {
      this.viewer.destroy();
      this.viewer = null;
    }
  }

  // Additional utility methods
  zoomToFit() {
    if (!this.viewer) return;
    const canvas = this.viewer.get('canvas');
    canvas.zoom('fit-viewport', 'auto');
  }

  setZoomLevel(level) {
    if (!this.viewer) return;
    const canvas = this.viewer.get('canvas');
    canvas.zoom(level);
  }

  async saveDiagram() {
    if (!this.viewer) return null;
    
    try {
      const { xml } = await this.viewer.saveXML({ format: true });
      return xml;
    } catch (error) {
      console.error('Error saving BPMN diagram:', error);
      throw error;
    }
  }
}
