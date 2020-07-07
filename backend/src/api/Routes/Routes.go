package Routes

import (
	"api/Controllers"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.Use(cors.Default())
	/*
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"https://foo.com"},
		AllowMethods:     []string{"PUT", "PATCH"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://github.com"
		},
		MaxAge: 12 * time.Hour,
	}))*/

	grp1 := r.Group("/phone")
	{
		grp1.GET("list", Controllers.ListPhone)
		grp1.POST("insert", Controllers.InsertPhone)
		grp1.POST("delete", Controllers.DeletePhone)
	}

	return r
}