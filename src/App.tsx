import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Network, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Activity, 
  FileText, 
  AlertTriangle,
  Menu,
  X,
  ChevronRight,
  Cloud,
  HardDrive,
  Smartphone,
  Server
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { Mermaid } from './components/Mermaid';

const SECTIONS = [
  { id: 'summary', title: 'Executive Summary', icon: FileText },
  { id: 'architecture', title: 'System Architecture', icon: Network },
  { id: 'components', title: 'Component Design', icon: Layers },
  { id: 'stack', title: 'Technology Stack', icon: Cpu },
  { id: 'deployment', title: 'Deployment Strategy', icon: LayoutDashboard },
  { id: 'flow', title: 'Data & Control Flow', icon: Activity },
  { id: 'security', title: 'Security & Compliance', icon: ShieldCheck },
  { id: 'optimization', title: 'Performance Optimization', icon: Zap },
  { id: 'code', title: 'Sample Code & Config', icon: Code2 },
  { id: 'usecase', title: 'Use Case Implementation', icon: Smartphone },
  { id: 'challenges', title: 'Challenges & Future', icon: AlertTriangle },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('summary');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'summary':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">Executive Summary</h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              The EdgeAI Cloud-Native Framework is a multi-tier architectural solution designed to address the complexities of deploying AI inference models across heterogeneous, resource-constrained edge environments. By leveraging a hierarchical processing model—spanning from ultra-low-latency edge devices to high-capacity cloud data centers—the framework ensures optimal performance, high availability, and bandwidth efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                { title: 'Scalability', desc: 'Orchestrate thousands of edge nodes via a centralized control plane.' },
                { title: 'Low Latency', desc: 'Local inference on edge devices for real-time decision making.' },
                { title: 'Security', desc: 'Zero-trust architecture with end-to-end encryption and RBAC.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">System Architecture</h1>
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <Mermaid 
                id="arch-diagram"
                chart={`
graph TD
    subgraph Cloud_Layer [Cloud Layer - Global Control & Training]
        CP[Central Control Plane]
        MT[Model Training & Registry]
        LA[Large-scale Analytics]
        DB[(Global Storage)]
    end

    subgraph Fog_Layer [Fog Layer - Edge Data Centers]
        EDC[Edge Data Center]
        MA[Model Aggregation]
        MC[Model Caching]
        IA[Intermediate Analytics]
    end

    subgraph Edge_Layer [Edge Layer - Resource Constrained Devices]
        D1[Edge Device 1]
        D2[Edge Device 2]
        D3[Edge Device N]
        IE[Inference Engine]
    end

    CP -->|Policy & Models| EDC
    EDC -->|Cached Models| D1
    EDC -->|Cached Models| D2
    EDC -->|Cached Models| D3

    D1 -->|Telemetry & Metrics| EDC
    D2 -->|Telemetry & Metrics| EDC
    D3 -->|Telemetry & Metrics| EDC

    EDC -->|Aggregated Data| LA
    MT -->|New Versions| CP
                `}
              />
            </div>
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white">Hierarchical Structure</h2>
              <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                <li><strong>Cloud Layer:</strong> Centralized management, heavy training, and long-term data persistence.</li>
                <li><strong>Fog Layer:</strong> Regional hubs that reduce latency between edge and cloud, providing caching and local orchestration.</li>
                <li><strong>Edge Layer:</strong> The frontline devices performing real-time inference using optimized runtimes.</li>
              </ul>
            </div>
          </div>
        );

      case 'components':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-white">Component Design</h1>
            
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <Cloud className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Central Control Plane</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <h4 className="font-medium text-white mb-1">Orchestrator</h4>
                  <p className="text-sm text-zinc-400">Manages lifecycle of AI models across the fleet using Kubernetes-native operators.</p>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <h4 className="font-medium text-white mb-1">Policy Engine</h4>
                  <p className="text-sm text-zinc-400">Determines where models are deployed based on device capability and latency requirements.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-green-400">
                <Smartphone className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Edge Layer</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <h4 className="font-medium text-white mb-1">Lightweight Runtimes</h4>
                  <p className="text-sm text-zinc-400">Support for TFLite, ONNX, and TensorRT for hardware-specific acceleration.</p>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <h4 className="font-medium text-white mb-1">Offline Mode</h4>
                  <p className="text-sm text-zinc-400">Local inference capability ensures continuity during network outages.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-purple-400">
                <Server className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Edge Data Center (Fog)</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <h4 className="font-medium text-white mb-1">Model Cache</h4>
                  <p className="text-sm text-zinc-400">Stores frequently used model versions to minimize cloud bandwidth.</p>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <h4 className="font-medium text-white mb-1">Data Aggregator</h4>
                  <p className="text-sm text-zinc-400">Pre-processes and filters telemetry before sending to the cloud.</p>
                </div>
              </div>
            </section>
          </div>
        );

      case 'stack':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">Technology Stack</h1>
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-800/50">
                    <th className="p-4 font-semibold text-zinc-200">Category</th>
                    <th className="p-4 font-semibold text-zinc-200">Recommended Technologies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="p-4 text-zinc-300 font-medium">Orchestration</td>
                    <td className="p-4 text-zinc-400">Kubernetes (Cloud), K3s (Edge), Docker</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-zinc-300 font-medium">MLOps</td>
                    <td className="p-4 text-zinc-400">Kubeflow, MLflow, BentoML</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-zinc-300 font-medium">Inference Runtimes</td>
                    <td className="p-4 text-zinc-400">TensorFlow Lite, ONNX Runtime, NVIDIA TensorRT</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-zinc-300 font-medium">Communication</td>
                    <td className="p-4 text-zinc-400">gRPC (High perf), MQTT (IoT), REST (Management)</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-zinc-300 font-medium">Observability</td>
                    <td className="p-4 text-zinc-400">Prometheus, Grafana, ELK Stack</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-zinc-300 font-medium">Security</td>
                    <td className="p-4 text-zinc-400">HashiCorp Vault, Istio (Service Mesh), SPIFFE/SPIRE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'deployment':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">Deployment Strategy</h1>
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white">Kubernetes-Native Approach</h2>
              <p className="text-zinc-400">
                We utilize a <strong>Hub-and-Spoke</strong> Kubernetes model. The Hub (Cloud) manages the global state, while Spokes (Edge clusters) run K3s for minimal footprint.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-white">1. Provisioning</h3>
                  <p className="text-sm text-zinc-400">Automated bootstrapping of edge nodes using Infrastructure as Code (Terraform/Ansible) and secure zero-touch provisioning.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-white">2. Model Rollout</h3>
                  <p className="text-sm text-zinc-400">Canary deployments and blue-green strategies managed by ArgoCD or Flux for GitOps-based model lifecycle management.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-white">3. Version Control</h3>
                  <p className="text-sm text-zinc-400">Semantic versioning for models, allowing seamless rollbacks if edge performance metrics degrade.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-white">4. Resource Quotas</h3>
                  <p className="text-sm text-zinc-400">Strict K8s resource limits (CPU/Memory) to prevent AI models from starving critical system processes on edge devices.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'flow':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">Data & Control Flow</h1>
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-lg font-medium text-white mb-4">Model Update Flow</h3>
              <Mermaid 
                id="flow-diagram"
                chart={`
sequenceDiagram
    participant Dev as Data Scientist
    participant Registry as Model Registry
    participant CP as Control Plane
    participant Fog as Fog Node
    participant Edge as Edge Device

    Dev->>Registry: Push New Model (v2.0)
    Registry->>CP: Notify New Version
    CP->>CP: Validate against Edge Policies
    CP->>Fog: Distribute Model v2.0
    Fog->>Fog: Cache Model
    Fog->>Edge: Trigger Update
    Edge->>Fog: Pull Model v2.0
    Edge->>Edge: Load & Verify
    Edge->>CP: Report Success
                `}
              />
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">Security & Compliance</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl space-y-3">
                <ShieldCheck className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">Zero-Trust Architecture</h3>
                <p className="text-zinc-400">Every edge device is treated as untrusted. Mutual TLS (mTLS) is required for all communications between layers.</p>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl space-y-3">
                <HardDrive className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-semibold text-white">Secure Boot & TPM</h3>
                <p className="text-zinc-400">Hardware-level root of trust ensures that only signed, verified firmware and OS images can run on edge devices.</p>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl space-y-3">
                <LayoutDashboard className="w-8 h-8 text-purple-500" />
                <h3 className="text-xl font-semibold text-white">RBAC & IAM</h3>
                <p className="text-zinc-400">Granular access controls for model management, telemetry access, and device configuration.</p>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl space-y-3">
                <FileText className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-semibold text-white">Data Privacy</h3>
                <p className="text-zinc-400">Compliance with GDPR/CCPA by performing PII redaction at the edge before data is sent to the cloud.</p>
              </div>
            </div>
          </div>
        );

      case 'optimization':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">Performance Optimization</h1>
            <div className="prose prose-invert max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Model Optimization</h3>
                  <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                    <li><strong>Quantization:</strong> Reducing weight precision (FP32 to INT8) to save memory and speed up inference.</li>
                    <li><strong>Pruning:</strong> Removing redundant neural network parameters.</li>
                    <li><strong>Knowledge Distillation:</strong> Training smaller "student" models from large "teacher" models.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Network Optimization</h3>
                  <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                    <li><strong>Delta Updates:</strong> Sending only the changes between model versions.</li>
                    <li><strong>Compression:</strong> Using Brotli or Zstandard for telemetry payloads.</li>
                    <li><strong>Edge Caching:</strong> Reducing redundant requests to the central cloud.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'code':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">Sample Code & Config</h1>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Model Deployment YAML (K3s)</h3>
              <pre className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg overflow-x-auto text-sm text-zinc-300 font-mono">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: object-detection-edge
  labels:
    app: ai-inference
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ai-inference
  template:
    metadata:
      labels:
        app: ai-inference
    spec:
      containers:
      - name: inference-engine
        image: edge-ai/tflite-runtime:latest
        resources:
          limits:
            cpu: "500m"
            memory: "256Mi"
        env:
        - name: MODEL_PATH
          value: "/models/v2/detect.tflite"
        volumeMounts:
        - name: model-storage
          mountPath: /models
      volumes:
      - name: model-storage
        persistentVolumeClaim:
          claimName: model-pvc`}
              </pre>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Hierarchical Routing Pseudocode</h3>
              <pre className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg overflow-x-auto text-sm text-zinc-300 font-mono">
{`def route_inference(task):
    # Check local capability
    if task.complexity <= DEVICE_CAPABILITY:
        return local_inference_engine.run(task)
    
    # Check network latency to Fog
    if get_latency(FOG_NODE) < LATENCY_THRESHOLD:
        return offload_to_fog(task)
    
    # Fallback to Cloud for high-complexity tasks
    return offload_to_cloud(task)

def monitor_health():
    metrics = {
        "cpu": get_cpu_usage(),
        "temp": get_device_temp(),
        "latency": get_network_latency()
    }
    mqtt_client.publish("telemetry/health", json.dumps(metrics))`}
              </pre>
            </div>
          </div>
        );

      case 'usecase':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">Use Case: Smart City Traffic Management</h1>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Smartphone className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">The Scenario</h3>
                  <p className="text-zinc-400">A network of 5,000 smart cameras across a metropolitan area.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-zinc-800/30 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Edge (Camera)</h4>
                  <p className="text-sm text-zinc-400">Real-time vehicle counting and license plate OCR using TFLite.</p>
                </div>
                <div className="p-4 bg-zinc-800/30 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Fog (Street Cabinet)</h4>
                  <p className="text-sm text-zinc-400">Traffic flow aggregation and signal timing optimization for a 4-block radius.</p>
                </div>
                <div className="p-4 bg-zinc-800/30 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Cloud (HQ)</h4>
                  <p className="text-sm text-zinc-400">City-wide congestion heatmaps, historical trend analysis, and model re-training.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">Challenges & Future Enhancements</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Current Challenges
                </h3>
                <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                  <li><strong>Hardware Heterogeneity:</strong> Managing different architectures (ARM, x86, RISC-V) and accelerators (TPU, NPU).</li>
                  <li><strong>Unreliable Connectivity:</strong> Ensuring state consistency across thousands of intermittently connected nodes.</li>
                  <li><strong>Energy Constraints:</strong> Balancing inference accuracy with battery life on mobile edge devices.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  Future Enhancements
                </h3>
                <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                  <li><strong>Federated Learning:</strong> Training models locally on edge devices to preserve privacy while improving global accuracy.</li>
                  <li><strong>Self-Healing Networks:</strong> AI-driven automated recovery for edge clusters.</li>
                  <li><strong>6G Integration:</strong> Leveraging sub-millisecond latency for ultra-responsive edge-cloud collaboration.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans selection:bg-blue-500/30">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-bottom border-zinc-800 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Network className="w-6 h-6 text-blue-500" />
          <span className="font-bold text-white tracking-tight">EdgeAI Framework</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-zinc-400">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside 
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-72 bg-zinc-950 border-r border-zinc-800 transition-transform duration-300 lg:translate-x-0 lg:static lg:block",
            !isSidebarOpen && "-translate-x-full"
          )}
        >
          <div className="p-6 hidden lg:flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Network className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">EdgeAI</span>
          </div>

          <nav className="px-4 space-y-1">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  if (window.innerWidth < 1024) setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                  activeSection === section.id 
                    ? "bg-blue-600 text-white" 
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                )}
              >
                <section.icon className={cn(
                  "w-5 h-5",
                  activeSection === section.id ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                )} />
                {section.title}
                {activeSection === section.id && (
                  <motion.div 
                    layoutId="active-pill"
                    className="ml-auto"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-zinc-800 bg-zinc-950/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold">GG</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">gowshickg946@gmail.com</p>
                <p className="text-xs text-zinc-500">System Architect</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen lg:max-w-[calc(100vw-18rem)]">
          <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
