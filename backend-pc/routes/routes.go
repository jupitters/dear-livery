package routes

import (
	"github.com/gorilla/mux"
	"github.com/jupitters/dear-livery/controller"
)

func OrderRoutes(router *mux.Router) {
	router.HandleFunc("/order", controller.GetOrders).Methods("GET")
}
