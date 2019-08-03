#!/bin/bash
docker build  -t java-code-server .
docker run --rm -it --name java-code-server -p 8445:8443 java-code-server -NH
