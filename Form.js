import React from 'react'
import { FormControl, Container, TextField, IconButton } from '@material-ui/core'
import { Card, CardContent, Typography } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';


const Form = ({ title, deleteTodo, id }) => {
    const delTodo = () => deleteTodo(id)
    return (
        <div>
            <Container maxWidth="sm">
                <form>
                    <FormControl fullWidth={true}>
                        <TextField label="Insert here" required={true} />

                    </FormControl>
                </form>
            </Container>

            <Container>
                <Card variant="outlined" style={{ marginTop: 35, background: "lightBlue" }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">

                            {title}
                        </Typography>
                        <IconButton style={{ float: "right" }} onClick={delTodo}>
                            <ClearIcon style={{ color: "red" }} />
                        </IconButton>
                    </CardContent>
                </Card>
            </Container>



        </div>
    )
}

export default Form
