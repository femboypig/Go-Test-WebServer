package main

import (
    "html/template"
    "net/http"
)

func main() {
    // Обработчик для главной страницы
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        tmpl := "templates/index.html"
        t, err := template.ParseFiles(tmpl)
        if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        t.Execute(w, nil)
    })

    // Статические файлы
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

    // Запуск сервера
    http.ListenAndServe(":8080", nil)
}