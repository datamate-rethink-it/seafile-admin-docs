#!/bin/bash
#
# builds the mkdocs image and runs it to provide a local preview of the docs

if [[ "$1" == "-stop" ]]; then
  sudo docker kill seafile-admin-docs
  exit 0
fi

sudo docker build -t seafile-admin-docs .
sudo docker run --name seafile-admin-docs --rm -d -p 8000:8000 -v ${PWD}:/docs seafile-admin-docs

echo "Local documentation preview available at http://127.0.0.1:8000"
echo "Use './preview.sh -stop' to stop the preview"
