from node:14-alpine as builder

WORKDIR /app

copy package.json ./

copy yarn.lock ./

copy tsconfig.json ./

run yarn install

copy public ./public

copy src ./src

run yarn build

from lvkdotsh/dynamic-server

copy --from=builder /app/build /web
