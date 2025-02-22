FROM golang:latest AS compiler

WORKDIR /app

COPY . .

RUN go build -o /app/service

FROM ubuntu:latest AS release

WORKDIR /app

COPY --from=compiler /app/service /app/service

CMD ["/app/service"]
