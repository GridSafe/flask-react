var EventUtil={addHandle:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},removeHandle:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.dettachEvent?e.dettachEvent("on"+t,n):e["on"+t]=null},getEvent:function(e){return e||window.event},getTarget:function(e){return e.target||e.srcElement},preventDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!0},stopPropagation:function(e){e.stopProppagation?e.stopPropagation():e.cancelBubble=!0}};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV2ZW50VXRpbC5qcyJdLCJuYW1lcyI6WyJFdmVudFV0aWwiLCJhZGRIYW5kbGUiLCJlbGVtIiwidHlwZSIsImhhbmRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsInJlbW92ZUhhbmRsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXR0YWNoRXZlbnQiLCJnZXRFdmVudCIsImV2ZW50Iiwid2luZG93IiwiZ2V0VGFyZ2V0IiwidGFyZ2V0Iiwic3JjRWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wUHJvcHBhZ2F0aW9uIiwiY2FuY2VsQnViYmxlIl0sIm1hcHBpbmdzIjoiQUFBQSxHQUFJQSxZQUNBQyxVQUFXLFNBQVNDLEVBQUtDLEVBQUtDLEdBQ3ZCRixFQUFLRyxpQkFDSkgsRUFBS0csaUJBQWlCRixFQUFLQyxHQUFPLEdBQzdCRixFQUFLSSxZQUNWSixFQUFLSSxZQUFZLEtBQUtILEVBQUtDLEdBRTNCRixFQUFLLEtBQUtDLEdBQVFDLEdBRzFCRyxhQUFjLFNBQVNMLEVBQUtDLEVBQUtDLEdBQzFCRixFQUFLTSxvQkFDSk4sRUFBS00sb0JBQW9CTCxFQUFLQyxHQUFPLEdBQ2hDRixFQUFLTyxhQUNWUCxFQUFLTyxhQUFhLEtBQUtOLEVBQUtDLEdBRTVCRixFQUFLLEtBQUtDLEdBQVEsTUFHMUJPLFNBQVUsU0FBU0MsR0FDZixNQUFPQSxJQUFTQyxPQUFPRCxPQUczQkUsVUFBVyxTQUFTRixHQUNoQixNQUFPQSxHQUFNRyxRQUFVSCxFQUFNSSxZQUdqQ0MsZUFBZ0IsU0FBU0wsR0FDbEJBLEVBQU1LLGVBQ0xMLEVBQU1LLGlCQUVOTCxFQUFNTSxhQUFjLEdBRzVCQyxnQkFBaUIsU0FBU1AsR0FDbkJBLEVBQU1RLGlCQUNMUixFQUFNTyxrQkFFTlAsRUFBTVMsY0FBZSIsImZpbGUiOiJFdmVudFV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRXZlbnRVdGlsID0ge1xuICAgIGFkZEhhbmRsZTogZnVuY3Rpb24oZWxlbSx0eXBlLGhhbmRsZSl7XG4gICAgICAgIGlmKGVsZW0uYWRkRXZlbnRMaXN0ZW5lcil7XG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIodHlwZSxoYW5kbGUsZmFsc2UpO1xuICAgICAgICB9ZWxzZSBpZihlbGVtLmF0dGFjaEV2ZW50KXtcbiAgICAgICAgICAgIGVsZW0uYXR0YWNoRXZlbnQoJ29uJyt0eXBlLGhhbmRsZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZWxlbVtcIm9uXCIrdHlwZV0gPSBoYW5kbGU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZUhhbmRsZTogZnVuY3Rpb24oZWxlbSx0eXBlLGhhbmRsZSl7XG4gICAgICAgIGlmKGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcil7XG4gICAgICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSxoYW5kbGUsZmFsc2UpO1xuICAgICAgICB9ZWxzZSBpZihlbGVtLmRldHRhY2hFdmVudCl7XG4gICAgICAgICAgICBlbGVtLmRldHRhY2hFdmVudCgnb24nK3R5cGUsaGFuZGxlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlbGVtWydvbicrdHlwZV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRFdmVudDogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICByZXR1cm4gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgIH0sXG5cbiAgICBnZXRUYXJnZXQ6IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuICAgIH0sXG5cbiAgICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZihldmVudC5wcmV2ZW50RGVmYXVsdCl7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGlmKGV2ZW50LnN0b3BQcm9wcGFnYXRpb24pe1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==