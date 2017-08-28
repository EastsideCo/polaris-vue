export class Action {
    constructor() {
        this.content = null;
        this.accessibilityLabel = null,
        this.url = null;
        this.onAction = null;
        this.disabled = false;
        this.destructive = false;
        this.icon = null;
    }
    
    setContent(v) {
        this.content = v;
        return this;
    }
    
    setAccessibilityLabel(v) {
        this.accessibilityLabel = v;
        return this;
    }
    
    setUrl(v) {
        this.url = v;
        return this;
    }
    
    setOnAction(v) {
        this.onAction = v;
        return this;
    }
    
    setDisabled(v) {
        this.disabled = v;
        return this;
    }
    
    setDestructive(v) {
        this.destructive = v;
        return this;
    }
    
    setIcon(v) {
        this.icon = v;
        return this;
    }
}