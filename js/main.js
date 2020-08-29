new gridjs.Grid({
    search: true,
    pagination: {
        buttonsCount: 10,
        limit: 5,
        summary: true
    },
    sort: true,
    columns: ['No','Name', 'Username', 'Email', 'Website', {
        name: 'Actions',
        formatter: (cell, row) => gridjs.html(`<a onclick="return confirm('Delete Data ?')" href='javascript:void(0)'>Delete</a>`),
    }],
    server: {
        url: 'https://jsonplaceholder.typicode.com/users',
        then: data => data.map((res,i) => [i+1, res.name, res.username, res.email, res.website, null])
    },
    language: {
        'search': {
            'placeholder': 'Masukkan Kata Kunci...'
        },
        'pagination': {
            'previous': 'Sebelumnya',
            'next': 'Selanjutnya',
            'showing': ' 📋 Menampilkan',
            'results': () => 'Data',
            'to' : 'sampai',
            'of' : 'Data dari'
        }
    }
}).render(document.getElementById("gridtable"));