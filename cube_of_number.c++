#include<iostream>
using namespace std;
int main()
{
    int i,n;
    cout<<"enter the number of terms: ";
    cin>>n;
    for(i=1;i<=n;i++)
    {
        cout<<i*i*i<<',';
    }
    cout<<endl;
    return 0;
}