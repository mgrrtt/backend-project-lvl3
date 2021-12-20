install:
		npm ci

publish:
		npm publish --dry-run

lint:
		npx eslint .

test:
		npm run test

watch:
		npm run test-watch

cover:
		npm run test-cover

page-loader:
		node bin/page-loader.js
