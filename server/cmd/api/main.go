package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/PietroRhyan/would-you-rather-tech/tree/server/configs/db"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		panic("Error loading environment variables")
	}

	var dbConnectionString = fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		os.Getenv("POSTGRES_HOST"),
		os.Getenv("POSTGRES_PORT"),
		os.Getenv("POSTGRES_USER"),
		os.Getenv("POSTGRES_PASSWORD"),
		os.Getenv("POSTGRES_DB"),
		os.Getenv("POSTGRES_SSLMODE"),
	)

	conn, err := db.NewConnection(dbConnectionString)

	if err != nil {
		panic(err)
	}

	defer conn.Close()

	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})

	var servePort = fmt.Sprintf(":%s", os.Getenv("PORT"))

	fmt.Printf("Server running on http://localhost%s", servePort)
	http.ListenAndServe(servePort, r)
}
