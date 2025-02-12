
export default function Reducer1(Listico, action) {
    {
        switch (action?.type) {
            case 'initial-Listico':
                return action?.Listico;


            case 'add': return [
                ...Listico,
                {
                    id: action?.id,
                    title: action?.title,
                    status: false
                }
            ]

            case 'delete':
                return Listico.filter((ico) => {
                    return action.id != ico.id;

                })

            case 'doit':
                return Listico.map((lico) => {
                    if (action.id == lico.id) {
                        lico.status = !lico.status
                    }
                    return lico;


                })

                case 'edit':
                    return Listico.map((lico) => {
                        if (action.id == lico.id) {
                            lico.title = action?.newtot;
        
                        }
                        return lico;
                    }
                    )
                 


            default:
                return Listico;
        }
    }
}