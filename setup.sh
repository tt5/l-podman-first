#!/bin/bash

podman exec wolfi-pod-wolfi1 ./setup.sh
podman exec -d wolfi-pod-wolfi1 ./start.sh
podman exec wolfi-pod-wolfi1 ./setup-nats.sh
podman exec wolfi-pod-wolfi2 ./setup.sh
