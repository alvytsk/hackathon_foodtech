import json

data = []    
data = [
    {  
        'id': 1,
        'title': 'Coca-Cola',
        'price': 80,
        'amount': 1
    },
    {
        'id': 2,
        'title': 'Banana',
        'price': 10,
        'amount': 2
    }
]

# data = {}  
# data['people'] = []  
# data['people'].append({  
#     'name': 'Scott',
#     'website': 'stackabuse.com',
#     'from': 'Nebraska'
# })
# data['people'].append({  
#     'name': 'Larry',
#     'website': 'google.com',
#     'from': 'Michigan'
# })
# data['people'].append({  
#     'name': 'Tim',
#     'website': 'apple.com',
#     'from': 'Alabama'
# })

with open('public/json/test.json', 'w') as outfile:  
    json.dump(data, outfile)