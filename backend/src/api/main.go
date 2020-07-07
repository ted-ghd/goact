package main

import (
	"api/Config"
	"api/Models"
	"api/Routes"
	"fmt"
	"github.com/jinzhu/gorm"
)

var err error

func main() {
	Config.DB, err = gorm.Open("postgres",
		Config.DbURL(Config.BuildDBConfig()))

	if err != nil {
		fmt.Println("Status: ", err)
	}

	defer Config.DB.Close()
	Config.DB.AutoMigrate(&Models.Phone{})

	r := Routes.SetupRouter()
	r.Run()
}