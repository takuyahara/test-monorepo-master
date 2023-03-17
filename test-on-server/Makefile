.SILENT:
.PHONY: login
## Login to Google account.
login:
	npx clasp login

.SILENT:
.PHONY: create
## Create standalone project.
create:
	npx clasp create --type standalone

.SILENT:
.PHONY: open
## Open project.
open:
	npx clasp open

.SILENT:
.PHONY: push
## Push local codes to project.
push:
	npx clasp push

.SILENT:
.PHONY: forcepush
## Force push local codes to project.
forcepush:
	npx clasp push -f

.SILENT:
.PHONY: pull
## Pull remote codes from project.
pull:
	npx clasp pull

.DEFAULT_GOAL := help
.SILENT:
.PHONY: help
help: # https://gist.github.com/klmr/575726c7e05d8780505a#file-show-help-minified-make
	sed -ne"/^## /{h;s/.*//;:d" -e"H;n;s/^## //;td" -e"s/:.*//;G;s/\\n## /---/;s/\\n/ /g;p;}" ${MAKEFILE_LIST}|LC_ALL='C' awk -F --- -v n=$$(tput cols) -v i=19 -v a="$$(tput setaf 6)" -v z="$$(tput sgr0)" '{printf"%s%*s%s ",a,-i,$$1,z;m=split($$2,w," ");l=n-i;for(j=1;j<=m;j++){l-=length(w[j])+1;if(l<= 0){l=n-i-length(w[j])-1;printf"\n%*s ",-i," ";}printf"%s ",w[j];}printf"\n";}'
