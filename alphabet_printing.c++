#include<iostream>
using namespace std;
int main()
{
    int i,j,n;
    cout<<"enter the value of n: ";
    cin>>n;

    for(i=1;i<=n;i++)
    {
        char name= 'a'+i-1;
        for(j=1;j<=i;j++)
        {
            cout<<name<<" ";
        }
        cout<<endl;
    }
    return 0;
}