package Controllers

import (
	"api/Models"
	"net/http"
	"fmt"
	"github.com/gin-gonic/gin"
)

func ListPhone(c *gin.Context) {
	var phone []Models.Phone
	err := Models.GetAllPhones(&phone)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, phone)
	}
}

func InsertPhone(c *gin.Context) {
	var phone Models.Phone
	c.BindJSON(&phone)
	err := Models.InsertPhone(&phone)
	if err != nil {
		fmt.Println(err.Error())
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, phone)
	}
}

func DeletePhone(c *gin.Context) {
	var phone Models.Phone

	c.BindJSON(&phone)

	var targetId = phone.Id

	err := Models.DeletePhone(&phone, targetId)

	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, gin.H{"id"+ string(targetId): "is deleted"})
	}
}