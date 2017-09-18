import changeCase from 'change-case';

class ComponentHelpers {
    constructor() {
        this.componentNameFormat = name => name;
    }
    
    setComponentNameFormat(format) {
        this.componentNameFormat = format;
    }
    
    
    makeComponentClass(componentName, properties, state) {
        var classes = {};
        classes[componentName] = true;

        for (var prop of properties) {
            var value = state[prop];
            var valueTag = '';
            if (value && typeof value === 'string') {
                valueTag = value.charAt(0).toUpperCase() + value.slice(1);
            }
            classes[componentName + '--' + prop + valueTag] = state[prop];
        }

        return classes;
    }
    
    isNodeOfComponent(node, component) {
        if (!node || !node.componentOptions) {
            return false;
        }
        
        var nodeComponentTagName = node.componentOptions.tag;
        var componentTagName = this.getComponentName(component.polarisName);
        
        return nodeComponentTagName == componentTagName;
    }
    
    getComponentName(polarisName) {
        return this.componentNameFormat(polarisName, changeCase);
    }
    
    wrapNodesWithComponent(createElement, nodes, component, ignoredComponents = []) {
        var children = [];
        for (let node of nodes) {
            if (!node.tag && !node.text.trim()) {
                continue;
            }
            
            var added = false;
            if (this.isNodeOfComponent(node, component)) {
                added = true;
                children.push(node);
            } else {
                for (let ignored of ignoredComponents) {
                    if (this.isNodeOfComponent(node, ignored)) {
                        added = true;
                        children.push(node);
                        break;
                    }
                }
            }
            
            if (!added) {
                children.push(createElement(component, {}, [node]));
            }
        }
        return children;
    }
}


export default new ComponentHelpers();