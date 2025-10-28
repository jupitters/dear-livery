package models

import (
	"github.com/jinzhu/gorm"
	"github.com/jupitters/dear-livery/config"
)

var db *gorm.DB

type Order struct {
	gorm.Model
	OrderID     string `gorm:"column:order_id" json:"order_id"`
	OrderDate   string `gorm:"column:order_date" json:"order_date"`
	OrderStatus string `gorm:"column:order_status" json:"order_status"`
	TotalAmount string `gorm:"column:total_amount" json:"total_amount"`
	UserID      string `gorm:"column:user_id" json:"user_id"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Order{})
}
