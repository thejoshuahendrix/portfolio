FROM node:14-alpine as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install

COPY public ./public
COPY src ./src

RUN yarn build

FROM lvkdotsh/dynamic-server

COPY --from=builder /app/build /web
