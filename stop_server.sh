#!/bin/bash
ifExistApp `pgrep httpd`
if [[ -n ifExistApp ]]; then
  service httpd stop
fi
