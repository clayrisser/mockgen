import fetchMock from 'fetch-mock';
{% if domain %}{% print('\n') %}const domain = '{{ domain }}';
{% for mock in mocks %}
fetchMock.{{ mock.req.method | lower }}(`${domain}{{ mock.req.urlpath }}`, '{{ mock.res.body }}');
{% endfor %}{% else %}{% for mock in mocks %}
fetchMock.{{ mock.req.method | lower }}('{{ mock.req.url }}', '{{ mock.res.body }}');
{% endfor %}{% endif %}
fetchMock.restore();
