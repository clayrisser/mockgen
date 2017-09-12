import os
from cement.core.controller import CementBaseController, expose
from app.services.loader_service import load
from app.services.mock_service import Mock

class GenerateController(CementBaseController):
    class Meta:
        label = 'generate'
        description = 'Generate mock data'
        stacked_on = 'base'
        stacked_type = 'nested'
        arguments = [
            (['-l', '--loader'], {
                'action': 'store',
                'dest': 'loader',
                'help': 'Loader to run source through [postman, swagger]'
            }),
            (['-s', '--src', '--source'], {
                'action': 'store',
                'dest': 'source',
                'help': 'Loader source (url or file location)'
            }),
            (['-d', '--dest', '--destination'], {
                'action': 'store',
                'dest': 'dest',
                'help': 'Mock data destination'
            }),
            (['-t', '--type'], {
                'action': 'store',
                'dest': 'mock_type',
                'help': 'Mock type'
            }),
            (['-v', '--verbose'], {
                'action': 'store_true',
                'dest': 'verbose',
                'help': 'Verbose output'
            })
        ]

    @expose(hide=True)
    def default(self):
        pargs = self.app.pargs
        mock = load(pargs.loader, pargs.source)
        print(mock[0].res.headers)
