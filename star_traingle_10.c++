#include<iostream>
using namespace std;
int main()
{
    int i,j,n;
    cout<<"enter the number of terms: ";
    cin>>n;

    for(i=10;i<=10+n;i++)
    {
        for(j=10;j<=i;j++)
        {
            cout<<j<<" ";
        }
        cout<<endl;
    }
    return 0;
}