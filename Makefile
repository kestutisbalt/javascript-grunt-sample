all:
	@echo "Usage:"
	@echo "\tmake build - generates single java script file for project."
	@echo "\tmake clean - cleans build."
.PHONY: all


build:
	npm install && grunt
.PHONY: build


clean:
	rm -rf build
.PHONY: clean
