export default {
    title: 'Projects',
    name: 'projects',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
          title: 'Project Category',
          name: 'projectCategory',
          type: 'reference',
          to: [{type: 'category'}]
        },
        {
            title: 'Stack',
            name: 'stack',
            type: 'array',
            of: [{type: 'string'}]
          },
          {
            title: 'Live URL',
            name: 'liveUrl',
            type: 'url'
          },
          {
            title: 'Source Code URL',
            name: 'sourceUrl',
            type: 'url'
          }
    ]
}