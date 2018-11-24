import json

data = {}    
data = {  
    'id': 1,
    'name': 'banana',
    'amount': 3
}

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

with open('public/test.json', 'w') as outfile:  
    json.dump(data, outfile)