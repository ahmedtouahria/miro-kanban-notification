

const kanbanEventListenerUpdate = (fn) => {
    miro.board.ui.on("selection:update", fn);
    return () => {
      miro.board.ui.off("selection:update", fn);
    };
  };
  
  export const useSelectedElements = (onSelection) => {
    useEffect(() => {
      const unsubscribe = kanbanEventListenerUpdate((event) => {
        onSelection(event.items);
      });
  
      return () => {
        unsubscribe();
      };
    }, [onSelection]);
  };
  