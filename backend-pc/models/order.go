package models

import (
	"github.com/jinzhu/gorm"
	"github.com/jupitters/dear-livery/config"
)

var db *gorm.DB

type Order struct {
	gorm.Model
	OrderID     string `gorm:""json:"order_id"`
	OrderDate   string `json:"order_date"`
	OrderStatus string `json:"order_status"`
	TotalAmount string `json:"total_amount"`
	UserID      string `json:"user_id"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Order{})
}
