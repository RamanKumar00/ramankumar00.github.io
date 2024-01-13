#include<iostream>
using namespace std;
int main()
{
    int n;
    cout<<"enter the number of terms:  ";
    cin>>n;

    int count=0;
    int num=1;

    while(count<n)
    {
        if(num%2==0)
        {
            cout<< num <<" ";
            count++;
        }
        num++;
    }
    return 0;
}