import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

data = pd.read_csv("data.csv")
print(data.head)
plt.bar(data['RegionName'], data['2000-01-31'])
plot_filename = 'plot.png'
plt.savefig('plot.png')
img_tag = f'<img src="{plot_filename}"\n'
plt.show()
data_html = data.to_html()
#with open('home.html', 'a') as file:
  #file.seek(0, os.SEEK_END)
  #file.seek(file.tell() - 14, os.SEEK_SET)
  #file.write(img_tag + '</body></html>')
