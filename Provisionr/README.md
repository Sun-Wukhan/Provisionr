# Provisionr

Provisionr is a Node.js application designed to automate the installation of Homebrew packages.

## Features
- Installs both standard and cask applications
- Configurable via an external YAML file for flexibility
- Modular and scalable project structure

## Usage
1. Ensure Homebrew is installed.
2. Adjust `config/packages.yml` to include your desired packages.
3. Run the application:

Certainly, Lord Navid. Below is a detailed breakdown of each Homebrew package and its purpose within DevOps, Automation, and SysAdmin workflows.

🖥️ Development & Productivity

Package	Purpose
visual-studio-code	Powerful IDE for coding, debugging, and extensions.
neovim	Modern alternative to Vim, lightweight and extensible.
tmux	Terminal multiplexer to manage multiple sessions efficiently.
zsh	Shell alternative with better scripting capabilities.
oh-my-zsh	Framework to manage Zsh configuration with themes and plugins.
powerlevel10k	A high-performance, customisable Zsh prompt.
bat	Better alternative to cat with syntax highlighting.
fzf	Command-line fuzzy finder for files, history, and processes.
ripgrep	Fast recursive search, better than grep.
exa	Modern ls replacement with colours and Git integration.
lazygit	A simple, fast terminal UI for Git.
pre-commit	Git hook manager for enforcing code quality checks.

🛠️ Cloud & Infrastructure as Code (IaC)

Package	Purpose
terraform	Infrastructure as Code (IaC) tool for provisioning cloud resources.
ansible	Configuration management and automation tool for server deployments.
packer	Automates VM image creation for cloud platforms.
awscli	Command-line tool for managing AWS services.
azure-cli	Command-line interface for Microsoft Azure.
google-cloud-sdk	CLI tools for Google Cloud services.
kubectl	CLI for managing Kubernetes clusters.
helm	Kubernetes package manager for deploying applications.
krew	Plugin manager for kubectl.
argocd	GitOps continuous delivery tool for Kubernetes.
kind	Runs Kubernetes clusters in Docker for testing.
minikube	Runs Kubernetes clusters locally for development.

📦 Containers & Orchestration

Package	Purpose
docker	Standard container runtime for running microservices.
podman	Rootless container engine, alternative to Docker.
dive	Analyzes Docker images to optimize size and efficiency.
stern	Real-time Kubernetes log aggregator for multiple pods.

🔐 Security & Compliance

Package	Purpose
vault	Secure storage and access management for secrets and credentials.
trivy	Security scanner for vulnerabilities in container images and IaC.
tfsec	Static analysis tool for Terraform security best practices.
checkov	Infrastructure-as-code security scanner.
aws-vault	Securely manages AWS credentials.
session-manager-plugin	AWS Systems Manager plugin for remote server access.
mitmproxy	Interactive HTTPS proxy for debugging network traffic.

📊 Monitoring & Logging

Package	Purpose
prometheus	Time-series database for monitoring and alerting.
grafana	Data visualisation platform for Prometheus and other sources.
loki	Log aggregation system for observability.
promtail	Log collector for Loki.
promtool	Command-line tool for testing Prometheus configurations.
telegraf	Agent for collecting, processing, and reporting metrics.
filebeat	Lightweight log shipper for forwarding logs to Elasticsearch.
metricbeat	System and application monitoring agent for Elasticsearch.

🖧 Networking & Debugging

Package	Purpose
nmap	Network scanner for auditing and security testing.
tcpdump	Captures network packets for analysis.
netcat	Reads/writes data across networks, useful for troubleshooting.
socat	Relays data between two locations, like an advanced netcat.
iperf3	Network performance measurement tool.
speedtest-cli	CLI for testing internet speed.
openvpn	VPN client for secure connections.
wireguard-tools	Modern VPN solution, faster and more secure than OpenVPN.
ngrok	Exposes local servers to the internet securely.

📂 Databases & Message Queues

Package	Purpose
mysql	Open-source relational database.
postgresql	Advanced open-source relational database.
mongodb-community	NoSQL document database.
redis	In-memory key-value store for caching and message brokering.
rabbitmq	Message broker for microservices and event-driven architectures.
kafka	Distributed event streaming platform for real-time data processing.

🛡️ System Tools & Miscellaneous

Package	Purpose
htop	Interactive process viewer for monitoring system performance.
btop	More modern alternative to htop with advanced visuals.
jq	Command-line tool for parsing JSON.
yq	Similar to jq, but for YAML.
wget	Downloads files from the web.
curl	Transfers data from or to a server.
go	Programming language for building cloud-native applications.
node	JavaScript runtime for backend applications.
nvm	Node Version Manager for handling multiple Node.js versions.
python	Programming language for automation and scripting.
pipx	Isolated package manager for Python CLI tools.

🛠️ Additional Utilities

Package	Purpose
warp	Modern, GPU-accelerated terminal for high-performance development.

🔥 Optimised for DevOps, SysAdmin, and Automation
	•	Cloud & IaC: terraform, ansible, packer, awscli, azure-cli, google-cloud-sdk
	•	Containers & Kubernetes: docker, kubectl, helm, kind, argocd, stern
	•	Security & Compliance: vault, trivy, tfsec, checkov, mitmproxy
	•	Monitoring & Logging: prometheus, grafana, loki, telegraf, filebeat, metricbeat
	•	Networking & Debugging: nmap, tcpdump, ngrok, iperf3, openvpn
	•	Databases & Messaging: mysql, postgresql, redis, rabbitmq, kafka
	•	Productivity & Shell: tmux, zsh, powerlevel10k, fzf, bat, ripgrep, exa, lazygit
	•	System Tools: htop, btop, jq, yq, wget, curl, python, node, pipx

