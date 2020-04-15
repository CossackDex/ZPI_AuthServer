from auth_server_application import create_app

app = create_app()

if __name__ == "__main__":
    context = ('server.crt', 'server.key')
    app.run(debug=True, threaded=True)
