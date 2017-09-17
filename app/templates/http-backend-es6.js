function registerMockService($httpBackend) {
{% if domain %}{% print('\n') %}  const domain = '{{ domain }}';
{% for mock in mocks %}
  $httpBackend.when{{ mock.req.method}}(`${domain}{{ mock.req.urlpath }}`).response((method, url, data) => {
    return [{{ mock.res.status }}, '{{ mock.res.body }}', {}];
  });
{% endfor %}{% else %}{% for mock in mocks %}
  $httpBackend.when{{ mock.req.method}}('{{ mock.req.url }}').response((method, url, data) => {
    return [{{ mock.res.status }}, '{{ mock.res.body }}', {}];
  });
{% endfor %}{% endif %}
}
