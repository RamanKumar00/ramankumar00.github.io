#include<iostream>
using namespace std;
int main()
{
    int arr[6]={4,8,9,10,3,19};
    int firstmax=arr[0];
    int secondmax=arr[0];

    for(int i=1;i<6;i++)
    {
        if(arr[i]>firstmax)
        {
            firstmax=arr[i];
        }
    }
    for(int i=0;i<6;i++)
    {
        if(arr[i]<firstmax)
        {
            secondmax=max(secondmax,arr[i]);
        }
    }
    cout<<secondmax;
    return 0;

}