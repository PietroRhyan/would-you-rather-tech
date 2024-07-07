package db

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq" // Get the postgres driver
)

func NewConnection(dbConnectionString string) (*sql.DB, error) {
	Db, err := sql.Open("postgres", dbConnectionString)

	if err != nil {
		return nil, err
	}

	fmt.Println("Database connected!")
	return Db, nil
}
