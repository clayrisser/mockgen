class Mock():
    def __init__(self, req, res):
        self.req = Req(
            url=req['url'],
            method=req['method'],
            headers=req['headers'],
            body=req['body'],
        )
        self.res = Res(
            body=res['body'],
            headers=res['headers'],
            status=res['status']
        )

class Req():
    def __init__(self, url, method, headers, body):
        self.url = url
        self.method = method
        self.headers = headers
        self.body = body

class Res():
    def __init__(self, body, headers, status):
        self.body = body
        self.headers = headers
        self.status = status
