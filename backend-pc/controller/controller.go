package controller

import (
	"encoding/json"
	"net/http"

	"github.com/jupitters/dear-livery/models"
)

func GetOrders(w http.ResponseWriter, r *http.Request) {
	allOrders := models.GetAllOrders()
	res, _ := json.Marshal(allOrders)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
