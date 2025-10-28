package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/jupitters/dear-livery/routes"
)

func main() {
	router := mux.NewRouter()
	routes.OrderRoutes(router)
	http.Handle("/", router)
	log.Fatal(http.ListenAndServe(":9090", router))
}
