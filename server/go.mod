module github.com/PietroRhyan/would-you-rather-tech/tree/server

go 1.21.4

require (
	github.com/go-chi/chi/v5 v5.1.0
	github.com/joho/godotenv v1.5.1
)

require github.com/lib/pq v1.10.9 // indirect

replace github.com/PietroRhyan/would-you-rather-tech/tree/server/configs/db => ../../configs/db
