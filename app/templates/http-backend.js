function registerMockService($httpBackend) {
{% if domain %}{% print('\n') %}  const domain = '{{ domain }}';
{% for mock in mocks %}
  $httpBackend.when{{ mock.req.method}}(domain + '{{ mock.req.urlpath }}').response(function(method, url, data) {
    return [{{ mock.res.status }}, '{{ mock.res.body }}', {}];
  });
{% endfor %}{% else %}{% for mock in mocks %}
  $httpBackend.when{{ mock.req.method}}('{{ mock.req.url }}').response(function(method, url, data) {
    return [{{ mock.res.status }}, '{{ mock.res.body }}', {}];
  });
{% endfor %}{% endif %}
}
