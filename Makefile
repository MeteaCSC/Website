SRC = ./src

debug:
	npx tsc
	cp -R $(SRC)/* ./build/
	node build/index.js